# Use the official PHP image with the desired version
FROM php:8.2-apache

# Set the working directory inside the container
WORKDIR /var/www/backend

# Install system dependencies and PHP extensions for Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    cron \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Enable Apache mod_rewrite for Laravel
RUN a2enmod rewrite

# Copy the application files to the container
COPY ./innoscripta-challenge-backend .

# Copy the Apache virtual host configuration
COPY ./apache/default.conf /etc/apache2/sites-available/000-default.conf

# Set up permissions for Laravel
RUN chown -R www-data:www-data storage bootstrap/cache

# Add cron job file
ADD ./cron/laravel-cron /etc/cron.d/laravel-cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/laravel-cron

# Create the log file to be able to run tail
RUN touch /var/www/backend/storage/logs/cron.log

# Apply cron job
RUN crontab /etc/cron.d/laravel-cron

# Start Apache and cron
CMD ["apache2-foreground", "-DFOREGROUND"]
