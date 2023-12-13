package com.example.ebookserver.service;

import com.example.ebookserver.pojo.Collection;
import com.example.ebookserver.pojo.Comment;
import com.example.ebookserver.pojo.EasyLike;


public interface FeedBackPostService {
    int toLike(EasyLike easyLike);

    int toCollection(Collection collection);

    int toComment(Comment comment);
}
