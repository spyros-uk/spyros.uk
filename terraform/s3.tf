
resource "aws_s3_bucket" "spyros_uk_s3" {
  bucket = local.config[var.environment].domain

  tags = {
    Name        = local.config[var.environment].domain
    Environment = var.environment
  }
}

resource "aws_s3_bucket_website_configuration" "spyros_uk_s3_config" {
  bucket = aws_s3_bucket.spyros_uk_s3.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "spyros_uk_s3_public_access_config" {
  bucket = aws_s3_bucket.spyros_uk_s3.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "spyros_uk_s3_policy" {
  bucket = aws_s3_bucket.spyros_uk_s3.id

  policy = jsonencode({
    Version = "2012-10-17"
    Id      = "spyros_uk_s3_policy"
    Statement = [
      {
        Sid       = "AllowPublicRead"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.spyros_uk_s3.arn,
          "${aws_s3_bucket.spyros_uk_s3.arn}/*",
        ]
        Condition = {
          Bool = {
            "aws:SecureTransport" = "true"
          }
        }
      },
    ]
  })
}

resource "aws_s3_bucket" "www_spyros_uk_s3" {
  bucket = "www.${local.config[var.environment].domain}"

  tags = {
    Name        = "www.${local.config[var.environment].domain}"
    Environment = var.environment
  }

}

resource "aws_s3_bucket_website_configuration" "www_spyros_uk_s3_config" {
  bucket = aws_s3_bucket.www_spyros_uk_s3.bucket

  redirect_all_requests_to {
    host_name = aws_s3_bucket.spyros_uk_s3.bucket
    protocol = "http"
  }
}