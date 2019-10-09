1. f1 -> configure tasks를 입력

2. 탬플랫에서 tasks.join 파일 만드기 선택

3. MsBuild 빌드 대상을 실행합니다 선택

<br>

* 내부 내용 수정

<br>

```
{ 
  "version": "2.0.0", 
  "tasks": [
       { 
            "taskName": "chrome", 
            "type": "process", 
            "command": "chrome.exe", 
            "windows": { 
                 "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            }, 
            "args": [ 
                 "${file}"
            ],
            "problemMatcher": [],
            "group": { 
                 "kind": "build", 
                 "isDefault": true 
            } 
       } 
  ] 
}
```
