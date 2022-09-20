package com.singsong.api.service;

import com.singsong.db.entity.Song;

import java.util.List;

public interface SongService {
    List<Song> searchSongList(String word);
    Song getSongBySongId(Long songId);
}