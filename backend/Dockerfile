FROM python:3.11-slim

WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Run migrations and start server
EXPOSE 8000

# Create startup script
RUN echo '#!/bin/bash\npython manage.py migrate\npython manage.py runserver 0.0.0.0:8000' > /app/start.sh
RUN chmod +x /app/start.sh

CMD ["/app/start.sh"]