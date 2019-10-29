FROM python:3.7-slim-buster

WORKDIR /usr/instapy

COPY . .

RUN sed -i "s#deb http://deb.debian.org/debian buster main#deb http://deb.debian.org/debian buster main contrib non-free#g" /etc/apt/sources.list \
	&& apt-get update && apt-get install -y --no-install-recommends \
    	wget=1.20.1-1.1 gcc=4:8.3.0-1 g++=4:8.3.0-1 \
	firefox-esr=60.8.0esr-1~deb10u1 firefoxdriver=3.14.1-1\
 	&& apt-get clean \
 	&& rm -rf /var/lib/apt/lists/*
	
RUN pip3 install -r requirements.txt;

## This is used to wait for mongo (specified in the docker-compose file)
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD ["./wait" "&&", "python3", "-u", "start.py"]
