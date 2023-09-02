from datetime import datetime

title = input("타이틀 입력 : ")
title2 = "-".join(title.split())
now = datetime.now()
filename = now.strftime("%Y-%m-%d") + "-" + title2

header = f"""---
layout: post
title:  {title}
date:   {now.strftime("%Y-%m-%d %H:%M:%S")} +0900
categories: Jekyll GitHubPages
tags: Jekyll First
---
"""

with open(f"_posts/{filename}.md","w",encoding="utf-8") as f:
    f.write(header)