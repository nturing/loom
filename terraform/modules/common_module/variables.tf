# Module variables
variable "location" {
  description = "The location to deploy resources"
  type        = string
  default     = "eastus"
}

variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}

# Other module variables
