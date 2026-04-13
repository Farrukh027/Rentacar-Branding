import { business } from "@/data/business";
import type { ContactFormValues, ReservationFormValues } from "@/lib/types";

function encodeMessage(message: string) {
  return encodeURIComponent(message.trim());
}

export function buildWhatsAppLink(message: string, phoneNumber = business.whatsappNumber) {
  return `https://wa.me/${phoneNumber}?text=${encodeMessage(message)}`;
}

export function buildCarReservationMessage(carName: string, pickupDate: string, returnDate: string) {
  return `Salam, Brandium Rent a Car. ${carName} modeli üçün ${pickupDate}-dən ${returnDate}-dək rezervasiya etmək istəyirəm.`;
}

export function buildReservationMessage(values: ReservationFormValues) {
  const deliveryText = values.deliveryRequested ? "Bəli" : "Xeyr";

  return [
    `Salam, ${business.brandName}.`,
    `${values.selectedCar} modeli üçün rezervasiya etmək istəyirəm.`,
    `Ad soyad: ${values.fullName}`,
    `Telefon: ${values.phone}`,
    values.whatsapp ? `WhatsApp: ${values.whatsapp}` : "",
    `Götürülmə: ${values.pickupDate} ${values.pickupTime}`,
    `Qaytarılma: ${values.returnDate} ${values.returnTime}`,
    `Təhvil yeri: ${values.pickupLocation}`,
    `Ünvana çatdırılma: ${deliveryText}`,
    values.note ? `Qeyd: ${values.note}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildContactMessage(values: ContactFormValues) {
  return [
    `Salam, ${business.brandName}.`,
    "Sayt üzərindən sorğu göndərirəm.",
    `Ad soyad: ${values.fullName}`,
    `Telefon: ${values.phone}`,
    values.whatsapp ? `WhatsApp: ${values.whatsapp}` : "",
    `Mövzu: ${values.subject}`,
    `Mesaj: ${values.note}`
  ]
    .filter(Boolean)
    .join("\n");
}
