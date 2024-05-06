package dev.prisonerofum.EGRINGOTTS;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class App {

    //Just to check ip address
    public static void main(String[] args) {
        try {
            InetAddress ip = InetAddress.getLocalHost();
            System.out.println("Your current IP address : " + ip.getHostAddress());
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }
}
