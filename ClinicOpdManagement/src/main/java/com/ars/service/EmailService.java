package com.ars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public String sendNotificationEmail(String to, String subject, String message) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(to);
            mailMessage.setSubject(subject);
            mailMessage.setText(message);

            javaMailSender.send(mailMessage);

            // Email sent successfully
            return "Email sent successfully to " + to;
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception or log the error
            return "Failed to send email to " + to;
        }
    }
}
