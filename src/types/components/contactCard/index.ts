import { ContactDataResource } from "@local-types/resources/contacts"
export type ContactCardProps = Pick<ContactDataResource,
    "id" |
    "fullName" |
    "displayName" |
    "role" |
    "email" |
    "phoneCountryPrefix" |
    "phoneNumber" |
    "teamIds" |
    "image"
>