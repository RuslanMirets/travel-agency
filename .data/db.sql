PGDMP          +                z            travel-agency %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) 2    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    28441    travel-agency    DATABASE     �   CREATE DATABASE "travel-agency" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'ru_RU.UTF-8' LC_CTYPE = 'ru_RU.UTF-8';
    DROP DATABASE "travel-agency";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    13043    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    39529    Complex    TABLE     �   CREATE TABLE public."Complex" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Complex";
       public         postgres    false    3            �            1259    39527    Complex_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Complex_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Complex_id_seq";
       public       postgres    false    3    203            �           0    0    Complex_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Complex_id_seq" OWNED BY public."Complex".id;
            public       postgres    false    202            �            1259    39539    Hotel    TABLE     D  CREATE TABLE public."Hotel" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    "complexId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Hotel";
       public         postgres    false    3            �            1259    39537    Hotel_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Hotel_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Hotel_id_seq";
       public       postgres    false    205    3            �           0    0    Hotel_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Hotel_id_seq" OWNED BY public."Hotel".id;
            public       postgres    false    204            �            1259    36687    Role    TABLE     �   CREATE TABLE public."Role" (
    id integer NOT NULL,
    value character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Role";
       public         postgres    false    3            �            1259    36685    Role_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Role_id_seq";
       public       postgres    false    3    197            �           0    0    Role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;
            public       postgres    false    196            �            1259    36720    User    TABLE     k  CREATE TABLE public."User" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    avatar character varying(255) DEFAULT ''::character varying NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."User";
       public         postgres    false    3            �            1259    36734    UserRole    TABLE     h   CREATE TABLE public."UserRole" (
    id integer NOT NULL,
    "userId" integer,
    "roleId" integer
);
    DROP TABLE public."UserRole";
       public         postgres    false    3            �            1259    36732    UserRole_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UserRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."UserRole_id_seq";
       public       postgres    false    201    3            �           0    0    UserRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."UserRole_id_seq" OWNED BY public."UserRole".id;
            public       postgres    false    200            �            1259    36718    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public       postgres    false    3    199            �           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
            public       postgres    false    198                       2604    39532 
   Complex id    DEFAULT     l   ALTER TABLE ONLY public."Complex" ALTER COLUMN id SET DEFAULT nextval('public."Complex_id_seq"'::regclass);
 ;   ALTER TABLE public."Complex" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    202    203    203                       2604    39542    Hotel id    DEFAULT     h   ALTER TABLE ONLY public."Hotel" ALTER COLUMN id SET DEFAULT nextval('public."Hotel_id_seq"'::regclass);
 9   ALTER TABLE public."Hotel" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    204    205    205            �
           2604    36690    Role id    DEFAULT     f   ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);
 8   ALTER TABLE public."Role" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197                        2604    36723    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198    199                       2604    36737    UserRole id    DEFAULT     n   ALTER TABLE ONLY public."UserRole" ALTER COLUMN id SET DEFAULT nextval('public."UserRole_id_seq"'::regclass);
 <   ALTER TABLE public."UserRole" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200    201            �          0    39529    Complex 
   TABLE DATA               G   COPY public."Complex" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    203   \6       �          0    39539    Hotel 
   TABLE DATA               c   COPY public."Hotel" (id, name, image, location, "complexId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    205   �6       �          0    36687    Role 
   TABLE DATA               R   COPY public."Role" (id, value, description, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    197   �7       �          0    36720    User 
   TABLE DATA               ]   COPY public."User" (id, name, email, password, avatar, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    199   8       �          0    36734    UserRole 
   TABLE DATA               <   COPY public."UserRole" (id, "userId", "roleId") FROM stdin;
    public       postgres    false    201   �:       �           0    0    Complex_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Complex_id_seq"', 49, true);
            public       postgres    false    202            �           0    0    Hotel_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Hotel_id_seq"', 14, true);
            public       postgres    false    204            �           0    0    Role_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Role_id_seq"', 2, true);
            public       postgres    false    196            �           0    0    UserRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."UserRole_id_seq"', 6, true);
            public       postgres    false    200            �           0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 6, true);
            public       postgres    false    198                       2606    39536    Complex Complex_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_name_key";
       public         postgres    false    203                       2606    39534    Complex Complex_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_pkey";
       public         postgres    false    203                       2606    39547    Hotel Hotel_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_pkey";
       public         postgres    false    205                       2606    36695    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public         postgres    false    197                       2606    36697    Role Role_value_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_value_key" UNIQUE (value);
 A   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_value_key";
       public         postgres    false    197                       2606    36739    UserRole UserRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_pkey";
       public         postgres    false    201                       2606    36741 #   UserRole UserRole_userId_roleId_key 
   CONSTRAINT     p   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_roleId_key" UNIQUE ("userId", "roleId");
 Q   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_roleId_key";
       public         postgres    false    201    201            
           2606    36731    User User_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
 A   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_email_key";
       public         postgres    false    199                       2606    36729    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public         postgres    false    199                       2606    39548    Hotel Hotel_complexId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES public."Complex"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_complexId_fkey";
       public       postgres    false    205    2836    203                       2606    36747    UserRole UserRole_roleId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";
       public       postgres    false    201    197    2822                       2606    36742    UserRole UserRole_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_fkey";
       public       postgres    false    2828    201    199            �   {   x�}̱�0F��7Ez�e��a��T��G�n�@Q�῍p�X�O��Q�%f|��0�Ʒl/�v.t6j�Rc�I"���d,΂/�#��:$W��D���F.J.�&C��4_c��%�5��#B      �   �   x�}�;
1F�:YEzM��c2�Zln� X��ف��;D�qvd���p� p��:�����&2�߅<jf�t�p��天c��})��{��Q��S'�kՄW�K󖟤H�$�m�ڑ"|7�hl�W��Yrk��_�8�      �   w   x�3�tt����0�{.츰����.6\�p��¾��FFF�&��
��VF�V�zf�f��x���8C�]�8/̿����=��M`3����Z����͍��
������ kx<�      �   �  x�u��n�@F��Sd�]���*0��	D�"�c��o��}�.�Eէ�*U��38oTEU⨋�tF�����P}��<||���Y�X�����\8$�C��-��.���h>�w�7�Vx	��v6v}q��K;�^� �Y�z�	A�HH��v����4T{�������K�����T�&ޤ����I�A������j��Ew�S#`�ʲ%��������ȲUڀ0�cC��)��* �$�3���D��N�%�nfLQ��N�r��d��@ ]~��%�P}�~U����z���K��'-{'/��K����Bs�ga���&����Hƶ�����b��c`P�&SC�,Tߪ�]u�$#�e.e�p�<�l�s컝`ܟ�8 $�o���8��F�j�~���o�27�Q�L��k�.3=��w�\�u���&�@��o����l�؅2>��WͶp�_�Q��޶�DT�$��zQ�������¹u��e�΄��n_x�4	�����)W���Tp2O6����b�W�{���,l�%��&9]�3�|Q*~�x{y��[���Y�1c<�W�A�pi�L�,c����x�>���A��^�����u�/'��(�8)6*      �   *   x���	 0��l1�ո�:���T�o��%tO�g>�     