import { redirect } from "next/navigation";

// Redirección permanente hacia la sección de contacto en el single-page
export default function ContactoPage() {
  redirect("/#contacto");
}