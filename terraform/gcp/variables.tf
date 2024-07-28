variable "machine_type" {
  description = "The machine type to use for the instance"
  type        = string
  default     = "f1-micro"
}

variable "zone" {
  description = "The zone to deploy the instance in"
  type        = string
  default     = "us-central1-a"  # Change to your preferred zone
}

variable "image" {
  description = "The image to use for the instance"
  type        = string
  default     = "debian-cloud/debian-10"  # Change to your preferred image
}
