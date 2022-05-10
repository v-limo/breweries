export interface BrewaryType {
  id?: string
  name?: string
  brewery_type?: string
  street?: null | string
  address_2?: null | string
  address_3?: null | string
  city?: string
  state?: string
  county_province?: null | string
  postal_code?: string
  country?: string
  longitude?: null | string
  latitude?: null | string
  phone?: string
  website_url?: null | string
  updated_at?: Date
  created_at?: Date
}

export interface Option {
  label: string
  value: string
}
