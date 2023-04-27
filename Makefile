pdf:
	rm -rf ./build
	cp -r ./docs ./build
	python ./pdf_adapter.py
	docker run --rm -v "${PWD}/build":/gitbook -p 4000:4000 billryan/gitbook:zh-hans /bin/bash -c "gitbook install &&  gitbook pdf ./ ./sqle-manual.pdf"