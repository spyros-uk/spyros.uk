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

provider "aws" {}

terraform {
  backend "s3" {
    bucket = "spyros-uk-tfstate"
    key    = "tfstate"
    region = "eu-west-2"
  }
}
