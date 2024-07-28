# Azure-specific outputs
output "azure_resource_group_name" {
  description = "The name of the Azure resource group"
  value       = module.common_module.resource_group_name
}
