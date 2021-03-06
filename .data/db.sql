PGDMP                         z            travel-agency %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) r    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    28441    travel-agency    DATABASE     ?   CREATE DATABASE "travel-agency" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'ru_RU.UTF-8' LC_CTYPE = 'ru_RU.UTF-8';
    DROP DATABASE "travel-agency";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    13043    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            ?            1259    39359    City    TABLE     ?  CREATE TABLE public."City" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "countryId" integer NOT NULL,
    slug character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."City";
       public         postgres    false    3            ?            1259    39357    City_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."City_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."City_id_seq";
       public       postgres    false    3    217                       0    0    City_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."City_id_seq" OWNED BY public."City".id;
            public       postgres    false    216            ?            1259    39291    Comfort    TABLE     ?   CREATE TABLE public."Comfort" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Comfort";
       public         postgres    false    3            ?            1259    39289    Comfort_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Comfort_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Comfort_id_seq";
       public       postgres    false    3    213                       0    0    Comfort_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Comfort_id_seq" OWNED BY public."Comfort".id;
            public       postgres    false    212            ?            1259    39224    Complex    TABLE     ?   CREATE TABLE public."Complex" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Complex";
       public         postgres    false    3            ?            1259    39222    Complex_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Complex_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Complex_id_seq";
       public       postgres    false    205    3                       0    0    Complex_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Complex_id_seq" OWNED BY public."Complex".id;
            public       postgres    false    204            ?            1259    39377    Country    TABLE     {  CREATE TABLE public."Country" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    abroad boolean DEFAULT true NOT NULL,
    slug character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    description character varying(800) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Country";
       public         postgres    false    3            ?            1259    39375    Country_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Country_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Country_id_seq";
       public       postgres    false    219    3                       0    0    Country_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Country_id_seq" OWNED BY public."Country".id;
            public       postgres    false    218            ?            1259    39234    Hotel    TABLE     8  CREATE TABLE public."Hotel" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    "cityId" integer NOT NULL,
    "complexId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Hotel";
       public         postgres    false    3            ?            1259    39232    Hotel_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Hotel_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Hotel_id_seq";
       public       postgres    false    3    207                       0    0    Hotel_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Hotel_id_seq" OWNED BY public."Hotel".id;
            public       postgres    false    206            ?            1259    36687    Role    TABLE     ?   CREATE TABLE public."Role" (
    id integer NOT NULL,
    value character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Role";
       public         postgres    false    3            ?            1259    36685    Role_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Role_id_seq";
       public       postgres    false    197    3                       0    0    Role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;
            public       postgres    false    196            ?            1259    39265    Tour    TABLE     F  CREATE TABLE public."Tour" (
    id integer NOT NULL,
    price double precision NOT NULL,
    "arrivalDates" character varying(255) NOT NULL,
    "durationDays" character varying(255) NOT NULL,
    "tourIncludes" character varying(16000),
    "additionalInfo" character varying(16000),
    "additionalPayment" character varying(16000),
    images jsonb,
    description character varying(16000) NOT NULL,
    "typeId" integer,
    "hotelId" integer,
    "transportId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Tour";
       public         postgres    false    3            ?            1259    39301    TourComfort    TABLE     n   CREATE TABLE public."TourComfort" (
    id integer NOT NULL,
    "tourId" integer,
    "comfortId" integer
);
 !   DROP TABLE public."TourComfort";
       public         postgres    false    3            ?            1259    39299    TourComfort_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."TourComfort_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."TourComfort_id_seq";
       public       postgres    false    3    215                       0    0    TourComfort_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TourComfort_id_seq" OWNED BY public."TourComfort".id;
            public       postgres    false    214            ?            1259    39263    Tour_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Tour_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Tour_id_seq";
       public       postgres    false    211    3                       0    0    Tour_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Tour_id_seq" OWNED BY public."Tour".id;
            public       postgres    false    210            ?            1259    39255 	   Transport    TABLE     ?   CREATE TABLE public."Transport" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Transport";
       public         postgres    false    3            ?            1259    39253    Transport_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Transport_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Transport_id_seq";
       public       postgres    false    3    209                       0    0    Transport_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Transport_id_seq" OWNED BY public."Transport".id;
            public       postgres    false    208            ?            1259    39171    Type    TABLE     O  CREATE TABLE public."Type" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(1500) NOT NULL,
    image character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Type";
       public         postgres    false    3            ?            1259    39169    Type_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Type_id_seq";
       public       postgres    false    203    3                       0    0    Type_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Type_id_seq" OWNED BY public."Type".id;
            public       postgres    false    202            ?            1259    36720    User    TABLE     k  CREATE TABLE public."User" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    avatar character varying(255) DEFAULT ''::character varying NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."User";
       public         postgres    false    3            ?            1259    36734    UserRole    TABLE     h   CREATE TABLE public."UserRole" (
    id integer NOT NULL,
    "userId" integer,
    "roleId" integer
);
    DROP TABLE public."UserRole";
       public         postgres    false    3            ?            1259    36732    UserRole_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."UserRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."UserRole_id_seq";
       public       postgres    false    201    3                       0    0    UserRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."UserRole_id_seq" OWNED BY public."UserRole".id;
            public       postgres    false    200            ?            1259    36718    User_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public       postgres    false    199    3                       0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
            public       postgres    false    198            8           2604    39362    City id    DEFAULT     f   ALTER TABLE ONLY public."City" ALTER COLUMN id SET DEFAULT nextval('public."City_id_seq"'::regclass);
 8   ALTER TABLE public."City" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    216    217    217            6           2604    39294 
   Comfort id    DEFAULT     l   ALTER TABLE ONLY public."Comfort" ALTER COLUMN id SET DEFAULT nextval('public."Comfort_id_seq"'::regclass);
 ;   ALTER TABLE public."Comfort" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    212    213    213            2           2604    39227 
   Complex id    DEFAULT     l   ALTER TABLE ONLY public."Complex" ALTER COLUMN id SET DEFAULT nextval('public."Complex_id_seq"'::regclass);
 ;   ALTER TABLE public."Complex" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    205    204    205            9           2604    39380 
   Country id    DEFAULT     l   ALTER TABLE ONLY public."Country" ALTER COLUMN id SET DEFAULT nextval('public."Country_id_seq"'::regclass);
 ;   ALTER TABLE public."Country" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    219    218    219            3           2604    39237    Hotel id    DEFAULT     h   ALTER TABLE ONLY public."Hotel" ALTER COLUMN id SET DEFAULT nextval('public."Hotel_id_seq"'::regclass);
 9   ALTER TABLE public."Hotel" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    206    207    207            -           2604    36690    Role id    DEFAULT     f   ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);
 8   ALTER TABLE public."Role" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            5           2604    39268    Tour id    DEFAULT     f   ALTER TABLE ONLY public."Tour" ALTER COLUMN id SET DEFAULT nextval('public."Tour_id_seq"'::regclass);
 8   ALTER TABLE public."Tour" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    211    210    211            7           2604    39304    TourComfort id    DEFAULT     t   ALTER TABLE ONLY public."TourComfort" ALTER COLUMN id SET DEFAULT nextval('public."TourComfort_id_seq"'::regclass);
 ?   ALTER TABLE public."TourComfort" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    214    215    215            4           2604    39258    Transport id    DEFAULT     p   ALTER TABLE ONLY public."Transport" ALTER COLUMN id SET DEFAULT nextval('public."Transport_id_seq"'::regclass);
 =   ALTER TABLE public."Transport" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    209    208    209            1           2604    39174    Type id    DEFAULT     f   ALTER TABLE ONLY public."Type" ALTER COLUMN id SET DEFAULT nextval('public."Type_id_seq"'::regclass);
 8   ALTER TABLE public."Type" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    202    203    203            .           2604    36723    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199            0           2604    36737    UserRole id    DEFAULT     n   ALTER TABLE ONLY public."UserRole" ALTER COLUMN id SET DEFAULT nextval('public."UserRole_id_seq"'::regclass);
 <   ALTER TABLE public."UserRole" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200    201                      0    39359    City 
   TABLE DATA               ^   COPY public."City" (id, name, "countryId", slug, image, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    217   ??                 0    39291    Comfort 
   TABLE DATA               G   COPY public."Comfort" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    213   .?       ?          0    39224    Complex 
   TABLE DATA               G   COPY public."Complex" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    205   K?                 0    39377    Country 
   TABLE DATA               i   COPY public."Country" (id, name, abroad, slug, image, description, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    219   h?       ?          0    39234    Hotel 
   TABLE DATA               f   COPY public."Hotel" (id, name, location, "cityId", "complexId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    207   R?       ?          0    36687    Role 
   TABLE DATA               R   COPY public."Role" (id, value, description, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    197   o?       ?          0    39265    Tour 
   TABLE DATA               ?   COPY public."Tour" (id, price, "arrivalDates", "durationDays", "tourIncludes", "additionalInfo", "additionalPayment", images, description, "typeId", "hotelId", "transportId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    211   ??                 0    39301    TourComfort 
   TABLE DATA               B   COPY public."TourComfort" (id, "tourId", "comfortId") FROM stdin;
    public       postgres    false    215   ?       ?          0    39255 	   Transport 
   TABLE DATA               I   COPY public."Transport" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    209   0?       ?          0    39171    Type 
   TABLE DATA               ^   COPY public."Type" (id, name, description, image, slug, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    203   M?       ?          0    36720    User 
   TABLE DATA               ]   COPY public."User" (id, name, email, password, avatar, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    199   ?       ?          0    36734    UserRole 
   TABLE DATA               <   COPY public."UserRole" (id, "userId", "roleId") FROM stdin;
    public       postgres    false    201   ??                  0    0    City_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."City_id_seq"', 1, true);
            public       postgres    false    216                       0    0    Comfort_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Comfort_id_seq"', 1, false);
            public       postgres    false    212                       0    0    Complex_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Complex_id_seq"', 1, false);
            public       postgres    false    204                       0    0    Country_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Country_id_seq"', 1, true);
            public       postgres    false    218                        0    0    Hotel_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Hotel_id_seq"', 1, false);
            public       postgres    false    206            !           0    0    Role_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Role_id_seq"', 2, true);
            public       postgres    false    196            "           0    0    TourComfort_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."TourComfort_id_seq"', 1, false);
            public       postgres    false    214            #           0    0    Tour_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Tour_id_seq"', 1, false);
            public       postgres    false    210            $           0    0    Transport_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Transport_id_seq"', 1, false);
            public       postgres    false    208            %           0    0    Type_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Type_id_seq"', 1, true);
            public       postgres    false    202            &           0    0    UserRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."UserRole_id_seq"', 6, true);
            public       postgres    false    200            '           0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 6, true);
            public       postgres    false    198            d           2606    39369    City City_image_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."City"
    ADD CONSTRAINT "City_image_key" UNIQUE (image);
 A   ALTER TABLE ONLY public."City" DROP CONSTRAINT "City_image_key";
       public         postgres    false    217            f           2606    39367    City City_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."City"
    ADD CONSTRAINT "City_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."City" DROP CONSTRAINT "City_pkey";
       public         postgres    false    217            \           2606    39298    Comfort Comfort_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Comfort"
    ADD CONSTRAINT "Comfort_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Comfort" DROP CONSTRAINT "Comfort_name_key";
       public         postgres    false    213            ^           2606    39296    Comfort Comfort_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Comfort"
    ADD CONSTRAINT "Comfort_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Comfort" DROP CONSTRAINT "Comfort_pkey";
       public         postgres    false    213            P           2606    39231    Complex Complex_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_name_key";
       public         postgres    false    205            R           2606    39229    Complex Complex_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_pkey";
       public         postgres    false    205            h           2606    39392    Country Country_image_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_image_key" UNIQUE (image);
 G   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_image_key";
       public         postgres    false    219            j           2606    39388    Country Country_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_name_key";
       public         postgres    false    219            l           2606    39386    Country Country_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_pkey";
       public         postgres    false    219            n           2606    39390    Country Country_slug_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_slug_key" UNIQUE (slug);
 F   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_slug_key";
       public         postgres    false    219            T           2606    39242    Hotel Hotel_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_pkey";
       public         postgres    false    207            <           2606    36695    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public         postgres    false    197            >           2606    36697    Role Role_value_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_value_key" UNIQUE (value);
 A   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_value_key";
       public         postgres    false    197            `           2606    39306    TourComfort TourComfort_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_pkey";
       public         postgres    false    215            b           2606    39308 ,   TourComfort TourComfort_tourId_comfortId_key 
   CONSTRAINT     |   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_tourId_comfortId_key" UNIQUE ("tourId", "comfortId");
 Z   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_tourId_comfortId_key";
       public         postgres    false    215    215            Z           2606    39273    Tour Tour_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_pkey";
       public         postgres    false    211            V           2606    39262    Transport Transport_name_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Transport"
    ADD CONSTRAINT "Transport_name_key" UNIQUE (name);
 J   ALTER TABLE ONLY public."Transport" DROP CONSTRAINT "Transport_name_key";
       public         postgres    false    209            X           2606    39260    Transport Transport_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Transport"
    ADD CONSTRAINT "Transport_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Transport" DROP CONSTRAINT "Transport_pkey";
       public         postgres    false    209            H           2606    39183    Type Type_image_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_image_key" UNIQUE (image);
 A   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_image_key";
       public         postgres    false    203            J           2606    39181    Type Type_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_name_key" UNIQUE (name);
 @   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_name_key";
       public         postgres    false    203            L           2606    39179    Type Type_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_pkey";
       public         postgres    false    203            N           2606    39185    Type Type_slug_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_slug_key" UNIQUE (slug);
 @   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_slug_key";
       public         postgres    false    203            D           2606    36739    UserRole UserRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_pkey";
       public         postgres    false    201            F           2606    36741 #   UserRole UserRole_userId_roleId_key 
   CONSTRAINT     p   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_roleId_key" UNIQUE ("userId", "roleId");
 Q   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_roleId_key";
       public         postgres    false    201    201            @           2606    36731    User User_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
 A   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_email_key";
       public         postgres    false    199            B           2606    36729    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public         postgres    false    199            q           2606    39248    Hotel Hotel_complexId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES public."Complex"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_complexId_fkey";
       public       postgres    false    2898    205    207            v           2606    39314 &   TourComfort TourComfort_comfortId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_comfortId_fkey" FOREIGN KEY ("comfortId") REFERENCES public."Comfort"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_comfortId_fkey";
       public       postgres    false    215    2910    213            u           2606    39309 #   TourComfort TourComfort_tourId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES public."Tour"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_tourId_fkey";
       public       postgres    false    2906    211    215            s           2606    39279    Tour Tour_hotelId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES public."Hotel"(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_hotelId_fkey";
       public       postgres    false    207    2900    211            t           2606    39284    Tour Tour_transportId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_transportId_fkey" FOREIGN KEY ("transportId") REFERENCES public."Transport"(id) ON UPDATE CASCADE;
 H   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_transportId_fkey";
       public       postgres    false    2904    209    211            r           2606    39274    Tour Tour_typeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public."Type"(id) ON UPDATE CASCADE;
 C   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_typeId_fkey";
       public       postgres    false    2892    211    203            p           2606    36747    UserRole UserRole_roleId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";
       public       postgres    false    197    201    2876            o           2606    36742    UserRole UserRole_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_fkey";
       public       postgres    false    201    199    2882               g   x?3估?¾??vpr?'gdr?$Y??X$???Y&?隘&??ZZ????$?%??$?'??e?s????(?[Z[??k???????? ??C            x?????? ? ?      ?      x?????? ? ?         ?  x??TMo?@=ï؞ID.?#?$??R5jԦwIC?\?!????+opb0a???Y??b{w?o޼7?AI??DRY?u??e)<=?/Kak?8l?W[a??I??zt:ՠ?u??A;???8-?I&V%?J?^T?Led\?Ā?????LR??????A????Xf2???? ????=8Ǯ?z?E@+?5????w[3?]??,??N?ܝ???c??} ???9?[e????}???@??,?{wERd????(???6ª?????????ŉŏ?+??H????JW??2?T#??B?@6 ?_??k???:????&$1]J?!ӍPqĳ:@#???_???_??e????bheS??3?&8??mxn?:?d?=??()<??D??PP????N??l?Y??P??7)??e#L??I?
?'ғp?R_SBկ?????=}?mz@?@Q[?*w??(*^ ???'"?R??U{s?끷"?Tƛ#?L%+?|S???-?Q6̗$kG??KL??d?=????\???WLt???^Δ/??BW|[+?Q???j?C???a?y???H`?U???(?D窗Ye?ȥF9*??H6??i1!?[?Z?o?A?~xf??ｑ?? k?Av@h ????OL?:???mZ????%D??Ӈ????K?zgְ3????$z?n:tv?????"3Մ??֬??F?ZoU?=?6???v? h>?7?qT~Y+??]??!      ?      x?????? ? ?      ?   w   x?3?tt?????0?{.츰????.6\?p??¾??FFF?&??
??VF?V?zf?f??x???8C?]?8/̿?????=??M`3????Z????͍??
??????? kx<?      ?      x?????? ? ?            x?????? ? ?      ?      x?????? ? ?      ?   ?  x?}T?n?P]?Wܮ???d??*ҪJ?(jtE!*????+????`?????9sE? ????y̌??+??˽??TBcvh?vZ??H,?<H???YK`?7ĉ,%??n%2r'??#U?%?P????0??e?Q? ArzۀH$KpҐŁѵ??l@?@8l????M?????ZB??@?Qkl',1?5jA?l	?!)?u?vv???l ?o???f\,2?H???Ďq??j?X"pY{K ~?F??
22????H?W??????#?j슊????,2c????Y?X??9?R?*??ЅtT?p?n???$????Ɏ`?/?kT?6?h???!??%"???@?8??Z???ɉs9%7%kW#?V???1nD??%t?????????td? ?l???3???$?g?? ????`?s??13%?\{??1????~Ά(???f:?B??\?y?S?#?i????. f???????a????o?Z6?VEp?6????AI???#????3=Ĉ"\ؑ?????b妚????8?|? m??sͲ???0pW???????=s??*?5w^???8PR???nF_???<
?-?O?Bx??B;?Q?/
?n?o??}??~???v??/???lUڵN?q^}???_?-\_??_?}?u??_nz?Z?V?*??0???J??ᗛg??J??G???b?????L      ?   ?  x?u??n?@F??Sd?]????*0??	D?"?c??o??}?.?Eէ?*U???38oTEU⨋?tF?????P}??<||???Y?X?????\8$?C??-??.???h>?w?7?Vx	??v6v}q??K;?^? ?Y?z??	A?HH??v????4T{???????K??????T?&ޤ????I?A??????j??Ew?S#`?ʲ%????????ȲUڀ0?cC??)??* ?$?3???D??N?%?nfLQ??N?r??d??@ ]~??%?P}?~U????z????K??'-{'/??K????Bs?ga???&????Hƶ?????b??c`P?&SC?,Tߪ?]u?$#?e.e?p?<?l?s컝`ܟ?8 $?o????8??F?j?~???o?27?Q?L??k?.3=??w??\?u???&?@??o????l?؅2>??WͶp??_?Q????޶?DT?$??zQ???????¹u??e?΄??n_x?4	?????)W???Tp2O6????b?W?{???,l?%??&9]?3?|Q*~?x{y???[???Y?1c<?W?A?pi?L??,c?????x?>???A??^??????u?/'????(?8)6*      ?   *   x???	 0??l1?ո?:???T?o???%tO?g>?     