#
# Build stage
#
FROM maven:3.8.4-jdk-11 AS build
# Add user
RUN adduser --system --group mavensprboot

COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml package

#
# Package stage
#
FROM openjdk:11-jre
# Add user
RUN adduser --system --group openjdksprboot

COPY --from=build /home/app/target/spring-boot-angular-app-0.0.1-SNAPSHOT.jar /usr/local/lib/spring-boot-app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/spring-boot-app.jar"]