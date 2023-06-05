
jpeg und wav dateien in Ordner kopieren.
mit terminal den Ordner Öffnen.

1. cd ~/Developer/books
2. cd Buch9 -> Tab
3. for file in ./*.wav; do ffmpeg -i "$file" -vn -ar 44100 -ac 2 -b:a 192k "${file%.wav}.mp3"; done
4. cd ..
5. python3 createJSON.py 

