package com.example.ebookserver.service;


import com.example.ebookserver.pojo.*;

import java.util.List;

public interface UserService {
    LoginData userLogin(User user);

    int register(User user);

    boolean verifyEmail(String email);

    boolean delete(Integer id, String password);

    int toBlackList(BlackList blackList);

    int update(User user);
    List<Integer> selectBlackUsers(Integer id);
    List<Integer> selectBlackedUsers(Integer id);

    User selectUserDetails(Integer id);

    NotifyPageBean selectNotifies(Integer id, Integer page, Integer pageSize);

}
