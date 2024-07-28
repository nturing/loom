output "instance_name" {
  description = "The name of the Google Compute instance"
  value       = google_compute_instance.default.name
}

output "instance_zone" {
  description = "The zone where the Google Compute instance is deployed"
  value       = google_compute_instance.default.zone
}

output "instance_public_ip" {
  description = "The public IP address of the Google Compute instance"
  value       = google_compute_instance.default.network_interface[0].access_config[0].nat_ip
}

output "instance_internal_ip" {
  description = "The internal IP address of the Google Compute instance"
  value       = google_compute_instance.default.network_interface[0].network_ip
}
