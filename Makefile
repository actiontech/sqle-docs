pdf:
	rm -rf ./build
	cp -r ./docs ./build
	docker run --rm -it -v "${PWD}":/usr/src/myapp -w /usr/src/myapp python:3 python pdf_adapter.py
	docker run --rm -it -v "${PWD}/build":/gitbook -p 4000:4000 billryan/gitbook:zh-hans /bin/bash -c "gitbook install &&  gitbook pdf ./ ./sqle-manual.pdf"