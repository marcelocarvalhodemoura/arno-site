import { useEffect, useState } from "react";
import { agendaCsvUrl } from "@/content/agenda-source";
import { events as fallbackEvents } from "@/content/events";
import type { ScoutEvent } from "@/content/types";
import { eventsFromCsv, upcoming } from "@/shared/lib/agenda";

type AgendaState = {
  events: ScoutEvent[];
  /** "planilha" quando veio do Google Sheets, "reserva" quando usou content/events.ts. */
  source: "planilha" | "reserva";
  loading: boolean;
};

let cache: Promise<ScoutEvent[] | null> | null = null;

function loadFromSheet(): Promise<ScoutEvent[] | null> {
  if (!agendaCsvUrl) return Promise.resolve(null);
  cache ??= fetch(agendaCsvUrl, { cache: "no-store" })
    .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
    .then((text) => {
      const list = eventsFromCsv(text);
      return list.length ? list : null; // planilha vazia ou fora do formato: usa a reserva
    })
    .catch((err) => {
      console.warn("[agenda] não foi possível ler a planilha:", err);
      cache = null;
      return null;
    });
  return cache;
}

export function useAgenda(): AgendaState {
  const [state, setState] = useState<AgendaState>({
    events: upcoming(fallbackEvents),
    source: "reserva",
    loading: Boolean(agendaCsvUrl),
  });

  useEffect(() => {
    let alive = true;
    loadFromSheet().then((list) => {
      if (!alive) return;
      setState(
        list
          ? { events: upcoming(list), source: "planilha", loading: false }
          : (s) => ({ ...s, loading: false }),
      );
    });
    return () => {
      alive = false;
    };
  }, []);

  return state;
}
