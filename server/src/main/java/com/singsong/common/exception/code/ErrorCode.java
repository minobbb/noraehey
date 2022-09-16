package com.singsong.common.exception.code;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    NOT_FOUND(404, "COMMON_ERR_404", "PAGE NOT FOUND"),
    INTER_SERVER_ERROR(500, "COMMON_ERR_500", "INTER SERVER ERROR"),

    // 멤버
    MEMBER_NOT_FOUND(404, "MEMBER_ERR_404", "MEMBER NOT FOUND"),
    NICKNAME_DUPLICATION(409, "MEMBER_ERR_409", "이미 존재하는 닉네임입니다."),
    EMAIL_DUPLICATION(409, "MEMBER_ERR_409", "이미 존재하는 이메일입니다."),
    Member_Unauthorized(401, "MEMBER_ERR_401", "MEMBER UNAUTHORIZED"),
    // 카카오
    KAKAO_IO_EXCEPTION(409, "KAKAO_ERR_409", "KAKAO IO EXCEPTION"),

    // 노래
    SONG_NOT_FOUND(404, "SONG_ERR_404", "SONG NOT FOUND")
    ;


    private int status;
    private String errorCode;
    private String message;
}
