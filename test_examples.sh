#!/bin/bash

find . -name "*.ant" -type f ! -path "./lib/*" | sort | while read -r file; do
	../target/release/antbyte "$file" -c "fps=50;dur=5;sleep=1000;loop=0;" 2>> tmp/test_log.txt
done
