# DigitalOcean-specific outputs
output "digitalocean_droplet_ip" {
  description = "The IP address of the DigitalOcean droplet"
  value       = module.common_module.droplet_ip
}
