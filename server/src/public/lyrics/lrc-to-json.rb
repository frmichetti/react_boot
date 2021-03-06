require 'json'

f = File.read('./enter-sandman.lrc')
count = 0
lyrics_json = {lyrics: [
    {
    line: "",
    time: -1
  }
  ]}
f.each_line do |line| 
    count+=1
    next if count < 6
    time = line.scan(/\d+/)
    min = time[0].to_i 
    sec = time[1].to_i
    mil = time[2].to_f / 100

    str =  line.scan(/[a-zA-Z]+/).join(' ')
    lyrics_json[:lyrics] << {line: str, time: (((min * 60) + sec + mil) * 1000).to_i}
end

puts lyrics_json

File.write('./enter-sandman.lyric.json', lyrics_json.to_json)