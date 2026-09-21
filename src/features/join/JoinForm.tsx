import { useState, type FormEvent } from "react";
import { FaAt, FaComment, FaTag, FaUser } from "react-icons/fa";

type JoinMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const empty: JoinMessage = { name: "", email: "", subject: "", message: "" };

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<JoinMessage>(empty);

  function update(field: keyof JoinMessage, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
    setForm(empty);
  }

  if (sent) {
    return (
      <p className="contact__ok">
        Mensagem registrada. Em um site em produção, este formulário seguiria para a secretaria do grupo. Obrigado pelo
        interesse — até sábado.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <FaUser />
        <input
          required
          name="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </label>
      <label>
        <FaAt />
        <input
          required
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </label>
      <label>
        <FaTag />
        <input
          required
          name="subject"
          placeholder="Assunto (ex.: inscrição Alcateia)"
          value={form.subject}
          onChange={(event) => update("subject", event.target.value)}
        />
      </label>
      <label className="is-area">
        <FaComment />
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Conte a idade do jovem e como conheceu o grupo"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </label>
      <button className="btn btn-primary btn-full" type="submit">
        Enviar mensagem
      </button>
    </form>
  );
}
