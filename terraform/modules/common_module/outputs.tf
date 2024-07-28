# Module outputs
output "resource_group_name" {
  description = "The name of the resource group"
  value       = azurerm_resource_group.rg.name
}

output "droplet_ip" {
  description = "The IP address of the DigitalOcean droplet"
  value       = digitalocean_droplet.vm.ipv4_address
}
