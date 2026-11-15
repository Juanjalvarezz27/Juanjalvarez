import { redirect } from "next/navigation";

// Redirección permanente hacia la sección de servicios en el single-page
export default function ServiciosPage() {
  redirect("/#servicios");
}