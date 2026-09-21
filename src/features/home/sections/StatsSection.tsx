import { metodo } from "@/content/method";
import { site } from "@/content/identity";
import Counter from "@/shared/ui/Counter";

export function StatsSection() {
  const years = new Date().getFullYear() - site.founded;
  return (
    <section className="stats">
      <div className="container stats__row">
        <Counter value={years} suffix="+" label="anos de trilha" />
        <Counter value={4} label="ramos educativos" />
        <Counter value={metodo.length} label="elementos do Método" />
        <Counter value={1} label="Promessa de honra" />
      </div>
    </section>
  );
}
