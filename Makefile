build:
	rm -rf ./build
	cp -r ./docs ./build
	docker run --rm -v "${PWD}":/usr/src/myapp -w /usr/src/myapp python:3 python pdf_adapter.py

pdf: build
	docker run --rm -v "${PWD}/build":/gitbook billryan/gitbook:zh-hans /bin/bash -c "gitbook install && gitbook pdf ./ ./sqle-manual.pdf"
	cp ./build/sqle-manual.pdf ./DMS用户手册.pdf
	@echo "PDF 导出完成: DMS用户手册.pdf"

word: build
	cd build && python3 ../word_export.py
	cp ./build/DMS用户手册.docx ./DMS用户手册.docx
	@echo "Word 导出完成: DMS用户手册.docx"