package studyApp.config;


import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration 
@EnableWebSecurity 
public class SecurityConfig {
    
    private final CustomerUserDetailsService userDetailsService;


    public SecurityConfig(CustomUserDetailsSergice userDetailsService){
        this.userDetailsService=userDetailsService;
    }

    @Bean
    public CorsConfigurationSource CorsConfigurationSource(){
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedMethods(List.of("GET","POST","PUT","PATCH","DELETE"));
        config.setAllowCredentials(true);
        /* DONT KNOW IF WE NEED THESE
        config.setAllowedHeaders(List.of("*"));
        config.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:8080"));
        */
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)throws Exception{
        
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
