# Main configuration for DigitalOcean
module "common_module" {
  source   = "../modules/common_module"
  location = var.location
  do_token = var.do_token
}

# DigitalOcean-specific resources
