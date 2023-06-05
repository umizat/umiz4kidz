
jpeg und wav dateien in Ordner kopieren.
mit terminal den Ordner Öffnen.

cd ~/Developer/books
cd Buch9 -> Tab

for file in ./*.wav; do ffmpeg -i "$file" -vn -ar 44100 -ac 2 -b:a 192k "${file%.wav}.mp3"; done

cd ..

python3 createJSON.py 

