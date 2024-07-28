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

variable "repo_url" {
  description = "The URL of the Git repository to clone"
  type        = string
}

variable "instance_type" {
  description = "The type of instance to create"
  type        = string
}

variable "image" {
  description = "The image to use for the instance"
  type        = string
}

# Other module variables