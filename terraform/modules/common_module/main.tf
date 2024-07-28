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

resource "null_resource" "common" {
  provisioner "local-exec" {
    command = <<-EOT
      #!/bin/bash
      apt-get update
      apt-get install -y git nodejs npm
      git clone ${var.repo_url} /home/ubuntu/loom
      cd /home/ubuntu/loom
      npm install
      npm start
    EOT
  }
}

# Other common resources
