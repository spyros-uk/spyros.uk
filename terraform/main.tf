variable "environment" {
  type = string
}

locals {
  config = jsondecode(file("${path.module}/config/config.json"))
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "spyros-uk"
  region  = "us-west-2"
}