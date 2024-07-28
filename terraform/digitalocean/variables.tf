# DigitalOcean-specific variables
variable "location" {
  description = "The location to deploy resources"
  type        = string
  default     = "nyc3"
}

variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}
