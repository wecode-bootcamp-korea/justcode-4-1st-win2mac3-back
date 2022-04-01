INSERT INTO one_sub_categories (id, name) VALUES (1, '침구');
INSERT INTO two_sub_categories (id, name) VALUES (1, '차렵이불');

INSERT INTO products
(id, name, price_before, price_after, image_url, one_sub_category_id, two_sub_category_id, sell_amount)
VALUES
(1,"드리밍 고밀도 60수 바이오워싱 차렵이불", 115000, 79900, "image1", 1, 1, 0),
(2,"드리밍 블루벨 플라워 차렵이불", 155000, 109900, "image2", 1, 1, 0),
(3,"로지 바이올렛 플라워 차렵이불", 205000, 109900, "image3", 1, 1, 0),
(4,"코티지 블루플라워 차렵이불", 110000, 69900, "image4", 1, 1, 0),
(5,"스윗 멀티 체크 슬림차렵이불[그린]", 104000, 69900, "image5", 1, 1, 0),
(6,"코티지 옐로우플라워 차렵이불", 90000, 58900, "image6", 1, 1, 0),
(7,"소프트니스 모달100% 무봉제 차렵이불[옐로우]", 120000, 84900, "image7", 1, 1, 0),
(8,"컴포트 올리브리프 차렵이불", 89000, 59900, "image8", 1, 1, 0);

INSERT INTO colors (id,name)
VALUES 
(1,"선택안함"),
(2,"옐로우"),
(3,"화이트"),
(4,"블루"),
(5,"핑크"),
(6,"바이올렛")
;

INSERT INTO sizes (id,name,price_add)
VALUES
(1,"선택안함",0),
(2,"SS",0),
(3,"Q",25000)
;


INSERT INTO compositions (id, name, price_add)
VALUES
(1,"선택안함",0),
(2,"차렵이불", 0),
(3,"이불세트", 12900),
(4,"패드세트", 67000);