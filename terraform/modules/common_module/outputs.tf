# Module outputs
output "resource_group_name" {
  description = "The name of the resource group"
  value       = azurerm_resource_group.rg.name
}

output "droplet_ip" {
  description = "The IP address of the DigitalOcean droplet"
  value       = digitalocean_droplet.vm.ipv4_address
}

output "repo_url" {
  description = "The URL of the Git repository"
  value       = var.repo_url
}

output "instance_type" {
  description = "The type of instance created"
  value       = var.instance_type
}

output "image" {
  description = "The image used for the instance"
  value       = var.image
}
