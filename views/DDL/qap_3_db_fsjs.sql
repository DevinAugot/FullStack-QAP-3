PGDMP             	            {        
   fsjs_qap_3    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17191 
   fsjs_qap_3    DATABASE     l   CREATE DATABASE fsjs_qap_3 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE fsjs_qap_3;
                postgres    false            �            1259    17192    menu    TABLE     �   CREATE TABLE public.menu (
    item_id integer NOT NULL,
    item_name character varying(255) NOT NULL,
    item_price numeric(10,2) NOT NULL
);
    DROP TABLE public.menu;
       public         heap    postgres    false            �          0    17192    menu 
   TABLE DATA           >   COPY public.menu (item_id, item_name, item_price) FROM stdin;
    public          postgres    false    214   E       o           2606    17196    menu menu_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (item_id);
 8   ALTER TABLE ONLY public.menu DROP CONSTRAINT menu_pkey;
       public            postgres    false    214            �   �   x�=�=�0����Wdҭk��J]�\\b��z#I��M@�s_�WVb�2k�c��e9��z�]�ڙ�Ű�OuB��~?�����92�G�X�Q%.����i�_�	�V8Ӵ��H��A�	k\h�8�/PE�{&����/;     