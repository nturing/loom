# Main configuration for Azure
module "common_module" {
  source   = "../modules/common_module"
  location = var.location
}

# Azure-specific resources
