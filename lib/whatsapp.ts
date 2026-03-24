/** Numéro WhatsApp de la structure : Gabon (+241), sans + ni espaces */
export const WHATSAPP_PHONE = "24176592517"

const defaultMessage =
  "Bonjour La Providence Auto-École, je vous contacte depuis votre site web."

/**
 * Ouvre directement la conversation avec ce numéro (application WhatsApp ou WhatsApp Web).
 * @see https://faq.whatsapp.com/5913398998672934
 */
export const whatsappChatUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(defaultMessage)}`
