package studyApp.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import studyApp.dto.UserResponse;
import studyApp.service.UserService;

//import jakarta.validation.Valid;
// neeeds dependency

@RestController 
@RequestMapping("/users")
public class UserControler {
    private final UserService userService;

    
    public UserControler(UserService userService){
        this.userService = userService;
    }
    


    @PostMapping 
    public UserResponse createUser(@Valid @RequestBody CreateUserRequest create){
        return userService.createUser(create);
    }

    @PatchMapping("/{id}")
    public UserResponse updateUser(@PathVariable Integer id, @Valid @RequestBody UpdateUserRequest update){
        return userService.updateUser(id,update);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id){
        userService.deleteById(id);
    }

    @GetMapping("/me")
    public UserResponse getCurrentUser(@AuthenticationPrincipal User currentUser){
        return userService.userToResponse(currentUser);
    }
}
