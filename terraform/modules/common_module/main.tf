# Module for common resources
resource "azurerm_resource_group" "rg" {
  name     = "loom-rg"
  location = var.location
}

resource "digitalocean_droplet" "vm" {
  name   = "loom-droplet"
  region = var.location
  size   = "s-1vcpu-1gb"
  image  = "ubuntu-20-04-x64"
}

# Other common resources
