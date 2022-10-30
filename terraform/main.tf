variable "environment" {
  type = string
}

variable "AWS_ACCESS_KEY_ID" {
  type = string
}


variable "AWS_SECRET_KEY" {
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
  region  = "us-west-2"
  # profile = "spyros-uk"
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_KEY
}