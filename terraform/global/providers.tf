# Common provider configurations for Azure and DigitalOcean
provider "azurerm" {
  features {}
}

provider "digitalocean" {
  token = var.do_token
}

# Other providers can be added here as needed
