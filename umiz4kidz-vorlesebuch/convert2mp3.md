
jpeg und wav dateien in Ordner kopieren.
mit terminal den Ordner Öffnen.


for file in ~/Developer/Buecher/SIGMUND\ DIE\ SCHNECKE-Buch7/*.wav; do ffmpeg -i "$file" -vn -ar 44100 -ac 2 -b:a 192k "${file%.wav}.mp3"; done


