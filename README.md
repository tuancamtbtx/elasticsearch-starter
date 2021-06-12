# **`elasticsearch`**


## **`Description`**
- Building elasticsearch cluster local

## **`Setup development`**

### - Setup elasticsearch
``` sh
  RUN cd /elasticsearch
  RUN docker-compose up -d
```
###  Test cluster (is running)
``` sh
  curl -X GET "localhost:9200/_cat/nodes?v=true&pretty"
```